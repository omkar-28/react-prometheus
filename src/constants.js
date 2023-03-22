import { MetricDefinition, useMetrics } from '@cabify/prom-react';

export const PROM_UI_REQUEST_SECONDS_COUNT = {
  type: 'histogram',
  name: 'prom_ui_request_seconds_count',
  description: 'A metric for UI request latency',
  buckets: [0.2, 0.5, 1, 2, 5, 10],
};

export const customPromMetrics = [
  PROM_UI_REQUEST_SECONDS_COUNT,
];

