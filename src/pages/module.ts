/**
 * 演示 react 语法的 模块(文件)导入导出概念：
 */

export const VERSION = '10.1.9'

export const showVersion = function (value: any) {
    console.log(`在版本${VERSION}进行打印value：`, value)
}

type JobInfo = {
    title: string,
    id: number,
    subId: string,

}
