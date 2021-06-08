const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
const svgRef = useRef();

// will be called initially and on every data change
useEffect(() => {
  const svg = select(svgRef.current);

  // scales
  const xScale = scaleBand()
    .domain(data.map((value, index) => index))
    .range([0, 300])
    .padding(0.5);

  const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

  const colorScale = scaleLinear()
    .domain([75, 100, 150])
    .range(["green", "orange", "red"])
    .clamp(true);

  // create x-axis
  const xAxis = axisBottom(xScale).ticks(data.length);
  svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

  // create y-axis
  const yAxis = axisRight(yScale);
  svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

  // draw the bars
  svg
    .selectAll(".bar")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .style("transform", "scale(1, -1)")
    .attr("x", (value, index) => xScale(index))
    .attr("y", -150)
    .attr("width", xScale.bandwidth())
    .on("mouseenter", (event, value) => {
      // events have changed in d3 v6:
      // https://observablehq.com/@d3/d3v6-migration-guide#events
      const index = svg.selectAll(".bar").nodes().indexOf(event.target);
      svg
        .selectAll(".tooltip")
        .data([value])
        .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
        .attr("class", "tooltip")
        .text(value)
        .attr("x", xScale(index) + xScale.bandwidth() / 2)
        .attr("text-anchor", "middle")
        .transition()
        .attr("y", yScale(value) - 8)
        .attr("opacity", 1);
    })
    .on("mouseleave", () => svg.select(".tooltip").remove())
    .transition()
    .attr("fill", colorScale)
    .attr("height", (value) => 150 - yScale(value));
}, [data]);