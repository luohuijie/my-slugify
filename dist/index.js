/**
 * 将任意语言文本转为 slug（保留大小写、空格转为 -）
 * @param text 输入文本
 * @returns slug
 */
export function slugify(text) {
    if (!text)
        return '';
    return text
        .replace(/[^\p{Letter}\p{Number}\s-]/gu, '') // 只保留字母、数字、空格、连字符
        .replace(/-+/g, '-') // 合并多连字符
        .replace(/\s+/g, '-') // 空格替换为 -
        .replace(/^-|-$/g, ''); // 去除开头结尾的 -
}
