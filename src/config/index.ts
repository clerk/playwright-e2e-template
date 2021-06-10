/**
 * Probably the place where you want to put configuration logic that is based on your environment.
 *
 * E.g.
 * const [CLIENT_APP_HOST, ACCOUNTS_DOMAIN_HOST, ...] = process.env.NODE_ENV === 'test' ? [...testUrls] : [...prodUrls];
 *
 * export const config = {
 *  CLIENT_APP_HOST,
 *  ACCOUNTS_DOMAIN_HOST,
 * };
 */

export const config = {
  ACCOUNTS_DOMAIN_HOST:
    process.env.ACCOUNTS_DOMAIN_HOST || "https://test-accounts-domain.dev",
};
