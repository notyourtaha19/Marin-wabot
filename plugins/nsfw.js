let handler = async m => m.reply(`
🔞 ┏━━━━━━━━━━━━━━━━━🔞
  |  
🍭#𝒂𝒔𝒔
  |
🍭#𝒃𝒍𝒐𝒘𝒋𝒐𝒃
  |
🍭#𝒄𝒖𝒎
  |
🍭#𝒆𝒓𝒐
  |
🍭#𝒇𝒆𝒎𝒅𝒐𝒎
  |
🍭#𝒇𝒐𝒐𝒕
  |
🍭#𝒈𝒍𝒂𝒔𝒔
  |
🍭#𝒍𝒐𝒍𝒊𝒏𝒔𝒇𝒘
  |
🍭#𝒕𝒉𝒊𝒈𝒉𝒔
  |
🔞 ┗━━━━━━━━━━━━━━━━━🔞
`.trim()) // Tambah sendiri kalo mau
handler.help = ['nsfw']
handler.tags = ['anime']
handler.command = /^nsfw$/i

module.exports = handler
