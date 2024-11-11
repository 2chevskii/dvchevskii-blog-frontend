export default class UrlBuilder {
  private scheme?: 'http' | 'https';
  private host?: string;
  private path: string[] = [];
  private query: Map<string, string[]> = new Map<string, string[]>();
  private fragment?: string;

  withScheme(scheme: 'http' | 'https'): UrlBuilder {
    this.scheme = scheme;
    return this;
  }

  withHost(host: string): UrlBuilder {
    this.host = host;
    return this;
  }

  appendPath(...pathFragments: string[]): UrlBuilder {
    this.path.push(...pathFragments);
    return this;
  }

  withFragment(fragment: string): UrlBuilder {
    this.fragment = fragment;
    return this;
  }

  appendQueryParameter(key: string, ...values: string[]): UrlBuilder {
    if (!this.query.has(key)) {
      this.query.set(key, []);
    }

    const valueCollection = this.query.get(key)!;
    valueCollection.push(...values);
    return this;
  }

  build(): string {
    let url = '';
    if (this.scheme) {
      url += this.scheme + '://';
    }

    if (this.host) {
      url += this.host;
    }

    url += '/';
    url += this.path.join('/');

    if (this.query.size !== 0) {
      url += '?';
      url += [...this.query.entries()].map(([key, values]) => values.map(v => `${key}=${encodeURIComponent(v)}`).join('&')).join('&');
    }

    if (this.fragment) {
      url += '#' + this.fragment;
    }

    return url;
  }
}
