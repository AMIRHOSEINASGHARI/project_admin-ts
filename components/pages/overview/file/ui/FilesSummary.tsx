"use client";

// icons
import { filePage_summary_data } from "@/constants";
// cmp
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const data = {
  total: 44.7,
  used: 22.35,
  chartData: [{ name: "space", value: 186, fill: "url(#gradientColor)" }],
  chartConfig: {
    space: {
      label: "space",
      color: "var(--primary-1)",
    },
  } satisfies ChartConfig,
};

const FilesSummary = () => {
  return (
    <Card>
      <CardContent>
        <ChartContainer
          config={data.chartConfig}
          className="aspect-square mx-auto h-[250px] w-full"
        >
          <RadialBarChart
            data={data.chartData}
            startAngle={180}
            endAngle={-(data.total * 360) / (data.total + data.used) + 270}
            innerRadius={100}
            outerRadius={150}
          >
            <defs>
              <linearGradient id="gradientColor" x1="0" y1="1" x2="1" y2="0">
                <stop
                  offset="0%"
                  style={{ stopColor: "var(--primary-5)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "var(--primary-1)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <RadialBar
              dataKey="value"
              cornerRadius={10}
              fill="url(#gradientColor)"
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 25}
                          className="dark:fill-white text-xl font-bold"
                        >
                          {(data.used / data.total) * 100}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 3}
                          className="fill-slate-500"
                        >
                          Used of {data.used} Gb / {data.total} Gb
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <div className="-mt-[80px] space-y-[20px]">
          {filePage_summary_data.map(({ icon, size, title, value }) => (
            <div
              key={title}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-5">
                <div className="text-[36px]">{icon}</div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-small">{title}</span>
                  <span className="text_disabled">{value} files</span>
                </div>
              </div>
              <span className="font-bold text-small">{size}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FilesSummary;
