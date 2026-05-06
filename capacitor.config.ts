import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'au.com.rollersoft.apps',
  appName: 'Rollersoft Apps',
  webDir: 'dist',
  server: {
    url: 'https://apps.rollersoft.com.au',
    cleartext: false,
  },
  android: {
    buildOptions: {
      keystorePath: process.env.ANDROID_KEYSTORE_PATH ?? '',
      keystoreAlias: 'android',
      keystorePassword: process.env.ANDROID_KEYSTORE_PASSWORD ?? '',
      keystoreAliasPassword: process.env.ANDROID_KEY_PASSWORD ?? '',
    },
  },
};

export default config;
