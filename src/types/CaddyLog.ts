export interface CaddyLog {
  level: string;
  ts: number;
  logger: string;
  msg: string;
  request: Request;
  common_log: string;
  duration: number;
  size: number;
  status: number;
  resp_headers: RespHeaders;
}

export interface Request {
  remote_addr: string;
  proto: string;
  method: string;
  host: string;
  uri: string;
  headers: Headers;
  tls: TLS;
}

export interface Headers {
  'Accept-Encoding': string[];
  'User-Agent': string[];
  'Accept-Language': string[];
  Referer: string[];
  Cookie: string[];
  Accept: string[];
}

export interface TLS {
  resumed: boolean;
  version: number;
  cipher_suite: number;
  proto: string;
  proto_mutual: boolean;
  server_name: string;
}

export interface RespHeaders {
  Date: string[];
  'Content-Length': string[];
  Etag: string[];
  Server: string[];
  'Alt-Svc': string[];
  'Accept-Ranges': string[];
  'Cache-Control': string[];
  'Content-Type': string[];
  'Last-Modified': string[];
}
