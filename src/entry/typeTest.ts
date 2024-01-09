import {VERSION} from "../pages/module.ts";
import {thisVar, ToolType, ToolVersion} from "../../start/common/utils.ts";

const sug = {
    id: '12'
} as SuggestEntity
const entity = {
    subUuId: '13241412',
    // name: '张三',
    type: '找活卡片',
} as DetailEntity
const version = VERSION
const type = {
    title: '标题',
    content: '内容',
    avatar: '头像',
} as ToolType

const toolVe = ToolVersion
const thisV = thisVar

console.log('version: ', version)
console.log('thisVar: ', thisV)
console.log('toolVersion: ', toolVe)
console.log('type: ', type)
console.log('entity: ', entity)
