export function decompressCode(root, code) {
  let output = [];
  let currentNode = root;
  for (let i = 0; i <= code.length; i++) {
    if (currentNode.left === null && currentNode.right === null) {
      output.push(currentNode.char);
      currentNode = root;
    }

    if (code[i] === 0) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return output.join('');
}
