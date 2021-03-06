/*
 * @Author: hzheyuan
 * @Date: 2022-03-03 14:42:44
 * @LastEditTime: 2022-05-18 10:17:13
 * @LastEditors: kalai
 * @Description: 绘制数据结构，方便测试
 * @FilePath: \tstl_playground\src\components\chart.ts
 */
import * as echarts from 'echarts';
import { Vector } from 'tstl'

export class Chart {
    chart: any

    constructor(id: string) {
        this.createChart(id)
    }

    createChart(id: string) {
        const chartDom: HTMLElement | null = document.getElementById(id);
        if (chartDom) this.chart = echarts.init(chartDom);
    }

    getTreeData = (tr: any) => {
        // console.log(tr.root)
        const dfs = (node: any) => {
            if (node === tr.nil) {
                return { name: 'nil', itemStyle: { color: '#000' }, children: [] };
            }

            let data: any = {
                name: `${node.key}:${node.value}`,
                // name: `${node.key}`,
                itemStyle: {
                    color: node.color === 0 ? '#f00' : '#000'
                },
                children: []
            };
            if (node.left) {
                let ld: any = dfs(node.left);
                data.children.push(ld);
            }

            if (node.right) {
                let rd = dfs(node.right);
                data.children.push(rd);
            }
            return data;
        }
        return dfs(tr.root)
    }

    drawTree = (tr: any) => {
        console.log(tr, 'zzzzzzz')
        const data = this.getTreeData(tr)
        this.chart.setOption(
            ({
                series: [
                    {
                        type: 'tree',
                        data: [data],
                        left: '2%',
                        right: '2%',
                        top: '8%',
                        bottom: '20%',
                        symbolSize: 32,
                        symbol: 'circle',
                        orient: 'vertical',
                        initialTreeDepth: -1,
                        label: {
                            position: 'inside',
                            verticalAlign: 'middle',
                            align: 'middle',
                            fontSize: 14
                        },
                        lineStyle: {
                            curveness: 0
                        },
                        leaves: {
                            lineStyle: {
                                width: 0
                            },
                            itemStyle: {
                                opacity: 0
                            }
                        },
                        animationDurationUpdate: 750
                    }
                ]
            })
        )
    }

    getHeapData = (heap: any) => {
        const n = heap.size()
        const dfs = (idx: any) => {
            if (idx >= n) return { name: 'nil', itemStyle: { color: '#000' }, children: [] };
            let data: any = {
                name: `${heap.at(idx)}`,
                itemStyle: {
                    color: '#f00'
                },
                children: []
            };
            let left = (idx * 2) + 1, right = 2 * idx + 2;
            let ld: any = dfs(left); data.children.push(ld);
            let rd = dfs(right); data.children.push(rd);
            return data;
        }
        let data = dfs(0)
        return data
    }

    drawHeap = (heap: any) => {
        const data = this.getHeapData(heap)
        this.chart.setOption(
            ({
                series: [
                    {
                        type: 'tree',
                        data: [data],
                        left: '2%',
                        right: '2%',
                        top: '8%',
                        bottom: '20%',
                        symbolSize: 32,
                        symbol: 'circle',
                        orient: 'vertical',
                        initialTreeDepth: -1,
                        label: {
                            position: 'inside',
                            verticalAlign: 'middle',
                            align: 'middle',
                            fontSize: 14
                        },
                        lineStyle: {
                            curveness: 0
                        },
                        leaves: {
                            lineStyle: {
                                width: 0
                            },
                            itemStyle: {
                                opacity: 0
                            }
                        },
                        animationDurationUpdate: 750
                    }
                ]
            })
        )
    }

    getListData = (list: any) => {
        let data = [], links = []
        // 处理header部分
        data.push({ name: 'header' })

        let cur = list.begin()
        while (cur.hasNext()) {
            data.push({ name: cur.getValue() })
            let curValue = cur.getValue(); cur.next();
            let nextValue = cur.getValue();
            links.push({
                source: curValue,
                target: nextValue === null ? 'header' : nextValue,
                lineStyle: {
                    curveness: 0.05
                }
            })
        }

        cur = list.begin()
        while (cur.hasNext()) {
            let curValue = cur.getValue(); cur.next()
            let nextValue = cur.getValue()
            // console.log(curValue, nextValue)
            links.push({
                source: nextValue === null ? 'header' : nextValue,
                target: curValue,
                lineStyle: {
                    curveness: -0.05
                }
            })
        }

        links.push(
            {
                source: 'header',
                target: list.begin().getValue(),
                lineStyle: {
                    curveness: -0.05
                }
            },
            {
                source: list.begin().getValue(),
                target: 'header',
                lineStyle: {
                    curveness: 0.05
                }
            }
        )

        return { data, links }
    }

    drawList(list: any) {
        const { data, links } = this.getListData(list)
        this.chart.setOption(
            {
                title: {
                    text: ''
                },
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'circular',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            show: true
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            fontSize: 20
                        },
                        data: data,
                        links: links,
                        lineStyle: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                ]
            }
        )
    }

    getVectorData<T>(vec: Vector<T>) {
        // console.log(vec)
        let len = vec.size(), i: number = 0;
        let indexs = [], data: any[] = []
        while (i < len) {
            indexs.push(i);
            let v = vec.at(i);
            let s = {
                name: v,
                value: 1,
                label: {
                    show: true,
                    with: 100,
                    formatter: '{b}'
                },
                emphasis: {
                    focus: 'series'
                }
            };
            data.push(s)
            i++;
        }
        return { data, indexs }
    }

    drawVector<T>(vec: Vector<T>) {
        let { data, indexs } = this.getVectorData(vec);
        let option = {
            xAxis: {
                axisTick: {
                    show: false
                },
                data: indexs
            },
            grid: {
                left: '0',
                height: '12%',
            },
            yAxis: {
                show: false
            },
            series: [{
                name: "Vector",
                type: "bar",
                barCategoryGap: '0%',
                // barWidth: '30',
                data: data,
            }]
        };
        this.chart.setOption(option)
    }

    updateVector<T>(vec: Vector<T>) {
        const {data, indexs} = this.getVectorData(vec);
        console.log(data, indexs)
        let op = this.chart.getOption();
        op.xAxis[0].data = indexs;
        op.series[0].data = data;
        console.log(op)
        // this.chart.clear()
        this.chart.setOption(op, { notMerge: true });
    }

    updateList(list: any) {
        const { data, links } = this.getListData(list);
        let op = this.chart.getOption();
        op.series[0].data = data;
        op.series[0].links = links;
        // this.chart.clear()
        this.chart.setOption(op);
    }

    updateHeap = (heap: any) => {
        const data = this.getHeapData(heap);
        let op = this.chart.getOption();
        op.series[0].data[0] = data;
        op.series[0].data[0] = data;
        this.chart.setOption(op, { notMerge: true });
    }

    updateChart = (tr: any) => {
        const data = this.getTreeData(tr);
        let op = this.chart.getOption();
        op.series[0].data[0] = data;
        op.series[0].data[0] = data;
        this.chart.setOption(op, { notMerge: true });
    }
}



