import React, { useEffect, useRef } from 'react';
import { select, pie, arc, scaleOrdinal } from 'd3';
import { useResizeObserver } from '../hooks/useResizeObserver';
import { ChartData } from './types';

interface PieChartProps {
  data: ChartData[];
  width: number;
  height: number;
  radius: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, width, height, radius }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width = 0, height = 0 } = dimensions || {};

    const colorScale = scaleOrdinal()
      .domain(data.map((d) => d.label))
      .range(['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#FF6384']);

    const pieGenerator = pie<ChartData>()
      .value((d) => d.value)
      .sort(null);

    const arcGenerator = arc<d3.PieArcDatum<ChartData>>()
      .innerRadius(0)
      .outerRadius(radius);

    const pieData = pieGenerator(data);

    svg
      .attr('width', width)
      .attr('height', height)
      .attr('role', 'img')
      .attr('aria-label', 'Pie chart displaying data')
      .attr('tabindex', 0)
      .selectAll('.arc')
      .data(pieData)
      .join('path')
      .attr('class', 'arc')
      .attr('d', (d) => arcGenerator(d)!)
      .attr('fill', (d) => colorScale(d.data.label))
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .on('focus', function (event, d) {
        select(this).attr('stroke-width', 4);
      })
      .on('blur', function (event, d) {
        select(this).attr('stroke-width', 2);
      });
  }, [data, dimensions, radius]);

  return <div ref={wrapperRef} className="overflow-hidden"><svg ref={svgRef}></svg></div>;
};

export default PieChart;