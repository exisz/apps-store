export interface AppVersion {
  versionCode: number;
  versionName: string;
  apk: string;
  size: number;
  released_at: string;
  sha256: string;
  changelog: string;
}

export interface App {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  homepage?: string;
  source_repo?: string;
  license?: string;
  versions: AppVersion[];
}

export interface RepoIndex {
  version: number;
  updated_at: string;
  apps: App[];
}

const REPO_BASE = 'https://repo.rollersoft.com.au';

export async function fetchIndex(): Promise<RepoIndex> {
  const res = await fetch(`${REPO_BASE}/index.json`);
  if (!res.ok) throw new Error(`Failed to fetch index: ${res.status}`);
  return res.json();
}

export function apkUrl(path: string): string {
  return `${REPO_BASE}/${path}`;
}

export function iconUrl(path?: string): string | null {
  return path ? `${REPO_BASE}/${path}` : null;
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
