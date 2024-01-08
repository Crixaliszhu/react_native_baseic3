/**
 * Promise
 */
export function getDetailInfo(): Promise<DetailEntity> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const detail = {
                subUuId: '147258',
                name: '我的姓名是约翰',
                type: '找活类型'
            } as DetailEntity
            resolve(detail)
        }, 2000)
    })
}
