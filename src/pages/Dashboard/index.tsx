import Header from "@/components/Header"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const Dashboard = () => {

    const chartData = [
        { month: "January", frequentes: 186, faltantes: 80 },
        { month: "February", frequentes: 305, faltantes: 200 },
        { month: "March", frequentes: 237, faltantes: 120 },
        { month: "April", frequentes: 73, faltantes: 190 },
        { month: "May", frequentes: 209, faltantes: 130 },
        { month: "June", frequentes: 214, faltantes: 140 },
        { month: "January", frequentes: 186, faltantes: 80 },
        { month: "February", frequentes: 305, faltantes: 200 },
        { month: "March", frequentes: 237, faltantes: 120 },
        { month: "April", frequentes: 73, faltantes: 190 },
        { month: "May", frequentes: 209, faltantes: 130 },
        { month: "June", frequentes: 214, faltantes: 140 },
        { month: "January", frequentes: 186, faltantes: 80 },
        { month: "February", frequentes: 305, faltantes: 200 },
        { month: "March", frequentes: 237, faltantes: 120 },
        { month: "April", frequentes: 73, faltantes: 190 },
        { month: "May", frequentes: 209, faltantes: 130 },
        { month: "June", frequentes: 214, faltantes: 140 },
    ]



    const chartConfig = {
        frequentes: {
            label: "Frequentes",
            color: "#0ddf76",
        },
        faltantes: {
            label: "Faltantes",
            color: "#db3a2e",
        },
    } satisfies ChartConfig


    return (
        <div className="container flex flex-col w-[1280px]">
            <Header />
            Dashboard
            <div className="mt-2 flex justify-evenly">
                <div>
                    <h1 className="font-bold">Número de alunos frequentes e faltantes</h1>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-[500px]">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="frequentes" fill="var(--color-frequentes)" radius={4} />
                            <Bar dataKey="faltantes" fill="var(--color-faltantes)" radius={4} />
                        </BarChart>
                    </ChartContainer>

                </div>
                <div>

                    <h1 className="font-bold">Número de alunos frequentes e faltantes</h1>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-[500px]">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="frequentes" fill="var(--color-frequentes)" radius={4} />
                            <Bar dataKey="faltantes" fill="var(--color-faltantes)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>

            </div>
        </div>
    )
}

export default Dashboard