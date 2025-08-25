import React, { useEffect, useRef } from 'react';
import { select, area, scaleLinear, scaleTime, max, curveMonotoneX } from 'd3';
import { useResizeObserver } from '../hooks/useResizeObserver';
import { ChartData } from './types';

interface AreaChartProps {
  data: ChartData[];
  width: number;
  height: number;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width = 0, height = 0 } = dimensions || {};

    const xScale = scaleTime()
      .domain([new Date(data[0].date), new Date(data[data.length - 1].date)])
      .range([0, width]);

    const yScale = scaleLinear()
      .domain([0, max(data, (d) => d.value) || 0])
      .range([height, 0]);

    const areaGenerator = area<ChartData>()
      .x((d) => xScale(new Date(d.date)))
      .y0(height)
      .y1((d) => yScale(d.value))
      .curve(curveMonotoneX);

    svg
      .attr('width', width)
      .attr('height', height)
      .attr('role', 'img')
      .attr('aria-label', 'Area chart displaying data')
      .attr('tabindex', 0)
      .append('path')
      .datum(data)
      .attr('fill', 'lightblue')
      .attr('d', areaGenerator)
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2);
  }, [data, dimensions]);

  return <div ref={wrapperRef} className="overflow-hidden"><svg ref={svgRef}></svg></div>;
};

export default AreaChart;