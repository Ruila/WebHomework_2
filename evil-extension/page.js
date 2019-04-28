const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
    console.log("name="+node.nodeValue);
  if(node.nodeName==="SCRIPT"||node.nodeName==="STYLE")return;
	if(node.nodeValue!=null){
    console.log(node.nodeValue);
		let textArray=node.nodeValue.split(' ');
		for(let i=0,length=textArray.length;i<length;i++){
			textArray[i]=textArray[i].replace('\n','');
			textArray[i]=textArray[i].trim();
			if(textArray[i] in MATCH_LIST){
        console.log(textArray[i]);
        console.log(MATCH_LIST[textArray[i]]);
        textArray[i]=MATCH_LIST[textArray[i]];
      }
		}
		node.nodeValue=textArray.join(' ');
	}
	let children=node.childNodes
	for(let i=0,length=children.length;i<length;i++)
		transformTextNodes(children[i]);
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
