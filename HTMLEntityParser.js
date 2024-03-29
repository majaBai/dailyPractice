/*
HTML entity parser is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.

The special characters and their entities for HTML are:

Quotation Mark: the entity is &quot; and symbol character is ".
Single Quote Mark: the entity is &apos; and symbol character is '.
Ampersand: the entity is &amp; and symbol character is &.
Greater Than Sign: the entity is &gt; and symbol character is >.
Less Than Sign: the entity is &lt; and symbol character is <.
Slash: the entity is &frasl; and symbol character is /.
Given the input text string to the HTML parser, you have to implement the entity parser.

Return the text after replacing the entities by the special characters.

Input: text = "&amp; is an HTML entity but &ambassador; is not."
Output: "& is an HTML entity but &ambassador; is not."
Explanation: The parser will replace the &amp; entity by &

Input: text = "and I quote: &quot;...&quot;"
Output: "and I quote: \"...\""

Constraints:

1 <= text.length <= 10^5
The string may contain any possible characters out of all the 256 ASCII characters.

*/

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let entity = {
        "&quot;": '"',
        "&apos;": "'",
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&frasl;": "/"
    }
    let res = ""
    for(let i = 0; i< text.length; i++){
        if(text[i] !== '&'){
            res += text[i]
        } else {
            let s = ''
            while(i < text.length){
                s += text[i]
                if(text[i] === ';'){
                    // ; 表示 entity 结束
                    entity[s]? res += entity[s] : res += s
                    break
                } else {
                    i++
                }
                if(text[i] === '&'){
                    // & 表示 entity 开始
                    res += s
                    i--
                    break
                }
            }
        }
    }
     return res   
};

function main(){
    let text = "&amp;gt;"
    let r = entityParser(text)
    console.log(r)
}
main()