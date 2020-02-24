/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 
 # Overview: 
   
    rearrange the tree in "in-order" 
    
    Psuedo Code 
    Make a dummy variable to create new TreeNode
    Make a variable name node that will be the final returned value
    Use Recursion to traverse through the Node
    Check for base case when there's no root
    start by traversing left
    set value and move pointer
 */
var increasingBST = function(root) {
  let dummy = new TreeNode()
  let node = dummy

  const traverse = function(root) {
    if (!root) return
    traverse(root.left)
    node.right = root
    node = node.right
    node.left = null
    traverse(root.right)
  }

  traverse(root)
  return dummy.right
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
   Goal Remove Duplicates from Sorted List
  
  Psuedo Code : 
  Given everything is sorted the next value has to be a new value 
  If dups is found move it's pointer to the next value 
  For example 1->1->2   , 1->2
 */
var deleteDuplicates = function(head) {
  // check if there's no head then just return
  if (!head) {
    return head
  }
  let node = head.next
  let prev = head
  // loop
  while (node) {
    // console.log(node.val, prev.val)
    // 1 1
    // 2 1
    if (node.val !== prev.val) {
      // make the prev next =
      prev.next = node
      prev = node
    }
    node = node.next
  }
  prev.next = null
  return head
}
