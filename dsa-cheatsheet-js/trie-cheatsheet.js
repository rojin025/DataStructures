/**
 * TRIE (prefix tree) — DSA Cheatsheet (JS)
 * ---------------------------------------
 * Tree of characters: each path from root spells a string. Shared prefixes = shared nodes.
 *
 * Operations: insert(word), search(word), startsWith(prefix) — all O(word length).
 *
 * Use when: Autocomplete, spell-check, prefix search ("all keys starting with …"), word games.
 * Trade-off: Can save space when many words share prefixes; often uses more due to pointer overhead.
 * JS has no built-in trie; implement with a root node whose children are keyed by character.
 */

// Simple trie node: map of character -> child node; endOfWord flag
class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.endOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}

module.exports = { TrieNode, Trie };
