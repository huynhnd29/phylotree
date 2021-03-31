export default function parse(s) {
    const ancestors = []
    let tree = {}
    const tokens = s.split(/\s*(;|\(|\)|,|:)\s*/)
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]
      const subtree = {}
      switch (token) {
        case '(': // new branchset
          tree.branchset = [subtree]
          ancestors.push(tree)
          tree = subtree
          break
        case ',': // another branch
          ancestors[ancestors.length - 1].branchset.push(subtree)
          tree = subtree
          break
        case ')': // optional name next
          tree = ancestors.pop()
          break
        case ':': // optional length next
          break
        default:
          const x = tokens[i - 1]
          if (x === ')' || x === '(' || x === ',') {
            tree.name = token
          } else if (x === ':') {
            tree.length = parseFloat(token)
          }
      }
    }
    return tree
  }