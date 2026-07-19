class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return null;

        const nodeCopiesByParentNode = new Map<Node, Node>()
        let currNode = head

        while (currNode) {
            const coppiedCurrNode = new Node(currNode.val)
            nodeCopiesByParentNode.set(currNode, coppiedCurrNode)
            currNode = currNode.next
        }

        currNode = head

        while (currNode) {
            const currCoppiedNode = nodeCopiesByParentNode.get(currNode)
            
            const nextNode = currNode.next
            const randomNode = currNode.random
            
            currCoppiedNode.next = nextNode ? nodeCopiesByParentNode.get(nextNode) : null
            currCoppiedNode.random = randomNode ? nodeCopiesByParentNode.get(randomNode) : null

            currNode = nextNode
        }

        return nodeCopiesByParentNode.get(head)
    }
}