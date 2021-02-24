export type TraceKeyValuePair = {
  key: string;
  type?: string;
  value: any;
};

export type TraceLink = {
  url: string;
  text: string;
};

export type TraceLog = {
  timestamp: number;
  fields: TraceKeyValuePair[];
};

export type TraceSpanReference = {
  refType: 'CHILD_OF' | 'FOLLOWS_FROM';
  spanID: string;
  traceID: string;
};

export interface TraceSpanRow {
  traceID: string;
  spanID: string;
  operationName: string;
  serviceName: string;
  serviceTags: TraceKeyValuePair[];
  startTime: number;
  duration: number;
  logs: TraceLog[];
  tags?: TraceKeyValuePair[];
  references?: TraceSpanReference[];
  warnings?: string[] | null;
  stackTraces?: string[];
  flags: number;
  errorIconColor?: string;
}
