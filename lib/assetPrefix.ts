const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/kurupira-labs' : '';

export function getAssetPath(path: string): string {
  // Se o path já começa com http:// ou https://, retorna como está
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove a barra inicial se existir
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Retorna o path com o basePath em produção
  return `${basePath}/${cleanPath}`;
}
