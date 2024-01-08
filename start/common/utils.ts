/**
 * 类型不需要export, 仅用于静态检查，编译不会报错。
 * 同一个文件下有export的变量常量时。type不export会报红但不会影响运行。
 */
type ToolType = {
    title: string,
    content: string,
    avatar: string,
}
/**
 * 变量，常量需要export
 */
export const ToolVersion = 'tools version = 1000'
export var thisVar = '这是一个var等待'
