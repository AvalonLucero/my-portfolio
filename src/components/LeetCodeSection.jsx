import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

const LeetCodeSection = () => {
  const [activeTerminals, setActiveTerminals] = useState({});

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const leetcodeProblems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      solution: `def two_sum(nums, target):
    """
    Find two numbers in the array that add up to target.
    
    Args:
        nums: List of integers
        target: Target sum
    
    Returns:
        List of two indices
    """
    num_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    
    return []

# Test the function
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Input: nums = {nums}, target = {target}")
print(f"Output: {result}")
print(f"Explanation: nums[{result[0]}] + nums[{result[1]}] = {nums[result[0]]} + {nums[result[1]]} = {target}")`,
      testCases: [
        { input: "nums = [2, 7, 11, 15], target = 9", expected: "[0, 1]" },
        { input: "nums = [3, 2, 4], target = 6", expected: "[1, 2]" },
        { input: "nums = [3, 3], target = 6", expected: "[0, 1]" }
      ]
    },
    {
      id: 2,
      title: "Valid Parentheses",
      difficulty: "easy",
      description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      solution: `def is_valid(s):
    """
    Check if parentheses are valid and properly closed.
    
    Args:
        s: String containing parentheses
    
    Returns:
        Boolean indicating if string is valid
    """
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack

# Test the function
test_cases = ["()", "()[]{}", "(]", "([)]", "{[]}"]

for test in test_cases:
    result = is_valid(test)
    print(f"Input: '{test}' -> Output: {result}")`,
      testCases: [
        { input: "s = '()'", expected: "True" },
        { input: "s = '()[]{}'", expected: "True" },
        { input: "s = '(]'", expected: "False" },
        { input: "s = '([)]'", expected: "False" },
        { input: "s = '{[]}'", expected: "True" }
      ]
    },
    {
      id: 3,
      title: "Merge Two Sorted Lists",
      difficulty: "easy",
      description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a sorted manner.",
      solution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
    def __str__(self):
        result = []
        current = self
        while current:
            result.append(str(current.val))
            current = current.next
        return " -> ".join(result)

def merge_two_lists(list1, list2):
    """
    Merge two sorted linked lists.
    
    Args:
        list1: Head of first sorted linked list
        list2: Head of second sorted linked list
    
    Returns:
        Head of merged sorted linked list
    """
    dummy = ListNode(0)
    current = dummy
    
    while list1 and list2:
        if list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    
    # Attach remaining nodes
    current.next = list1 or list2
    
    return dummy.next

# Test the function
# Create test lists: [1,2,4] and [1,3,4]
list1 = ListNode(1, ListNode(2, ListNode(4)))
list2 = ListNode(1, ListNode(3, ListNode(4)))

print(f"List 1: {list1}")
print(f"List 2: {list2}")

merged = merge_two_lists(list1, list2)
print(f"Merged: {merged}")`,
      testCases: [
        { input: "list1 = [1,2,4], list2 = [1,3,4]", expected: "[1,1,2,3,4,4]" },
        { input: "list1 = [], list2 = []", expected: "[]" },
        { input: "list1 = [], list2 = [0]", expected: "[0]" }
      ]
    },
    {
      id: 4,
      title: "Maximum Subarray",
      difficulty: "medium",
      description: "Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.",
      solution: `def max_subarray(nums):
    """
    Find the maximum sum of contiguous subarray using Kadane's algorithm.
    
    Args:
        nums: List of integers
    
    Returns:
        Maximum sum of contiguous subarray
    """
    if not nums:
        return 0
    
    max_sum = current_sum = nums[0]
    
    for i in range(1, len(nums)):
        # Either extend existing subarray or start new one
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# Test the function
test_cases = [
    [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    [1],
    [5, 4, -1, 7, 8],
    [-2, -1]
]

for i, nums in enumerate(test_cases, 1):
    result = max_subarray(nums)
    print(f"Test {i}: nums = {nums}")
    print(f"Maximum subarray sum: {result}")
    print()`,
      testCases: [
        { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", expected: "6" },
        { input: "nums = [1]", expected: "1" },
        { input: "nums = [5,4,-1,7,8]", expected: "23" }
      ]
    },
    {
      id: 5,
      title: "Climbing Stairs",
      difficulty: "easy",
      description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      solution: `def climb_stairs(n):
    """
    Calculate number of ways to climb n stairs.
    This is essentially the Fibonacci sequence.
    
    Args:
        n: Number of stairs
    
    Returns:
        Number of distinct ways to climb stairs
    """
    if n <= 2:
        return n
    
    # Dynamic programming approach
    prev2, prev1 = 1, 2
    
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    
    return prev1

# Test the function
test_cases = [1, 2, 3, 4, 5, 10]

for n in test_cases:
    result = climb_stairs(n)
    print(f"n = {n}: {result} ways to climb")
    
# Show the pattern
print("\\nPattern (Fibonacci-like):")
for i in range(1, 8):
    print(f"f({i}) = {climb_stairs(i)}")`,
      testCases: [
        { input: "n = 2", expected: "2" },
        { input: "n = 3", expected: "3" },
        { input: "n = 4", expected: "5" },
        { input: "n = 5", expected: "8" }
      ]
    }
  ];

  const runCode = (problemId) => {
    const problem = leetcodeProblems.find(p => p.id === problemId);
    if (!problem) return;

    // Simulate code execution
    setActiveTerminals(prev => ({
      ...prev,
      [problemId]: 'Running...'
    }));

    setTimeout(() => {
      // Simulate the output based on the solution
      let output = '';
      
      switch (problemId) {
        case 1:
          output = `Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9`;
          break;
        case 2:
          output = `Input: '()' -> Output: True
Input: '()[]{]' -> Output: True
Input: '(]' -> Output: False
Input: '([)]' -> Output: False
Input: '{[]}' -> Output: True`;
          break;
        case 3:
          output = `List 1: 1 -> 2 -> 4
List 2: 1 -> 3 -> 4
Merged: 1 -> 1 -> 2 -> 3 -> 4 -> 4`;
          break;
        case 4:
          output = `Test 1: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Maximum subarray sum: 6

Test 2: nums = [1]
Maximum subarray sum: 1

Test 3: nums = [5, 4, -1, 7, 8]
Maximum subarray sum: 23`;
          break;
        case 5:
          output = `n = 1: 1 ways to climb
n = 2: 2 ways to climb
n = 3: 3 ways to climb
n = 4: 5 ways to climb
n = 5: 8 ways to climb
n = 10: 89 ways to climb

Pattern (Fibonacci-like):
f(1) = 1
f(2) = 2
f(3) = 3
f(4) = 5
f(5) = 8
f(6) = 13
f(7) = 21`;
          break;
        default:
          output = 'Code executed successfully!';
      }

      setActiveTerminals(prev => ({
        ...prev,
        [problemId]: output
      }));
    }, 1500);
  };

  return (
    <motion.section 
      id="leetcode" 
      className="section"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2 className="section-heading" variants={fadeInUp}>
        LeetCode Solutions
      </motion.h2>
      <motion.div className="leetcode-grid" variants={staggerContainer}>
        {leetcodeProblems.map((problem) => (
          <motion.div key={problem.id} className="glass-card leetcode-card" variants={fadeInUp}>
            <div className="leetcode-header">
              <div>
                <h3>{problem.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  {problem.description}
                </p>
              </div>
              <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
                {problem.difficulty}
              </span>
            </div>

            <div className="code-section">
              <div className="code-container">
                <div className="code-header">
                  <i className="fab fa-python"></i> Python Solution
                </div>
                <div className="code-content">
                  <SyntaxHighlighter
                    language="python"
                    style={vscDarkPlus}
                    customStyle={{
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      fontSize: '0.85rem'
                    }}
                  >
                    {problem.solution}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div className="terminal-section">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot red"></div>
                    <div className="terminal-dot yellow"></div>
                    <div className="terminal-dot green"></div>
                  </div>
                  <div className="terminal-title">Output Terminal</div>
                </div>
                <div className="terminal-body">
                  {activeTerminals[problem.id] ? (
                    <div className="terminal-output">
                      {activeTerminals[problem.id]}
                    </div>
                  ) : (
                    <div className="terminal-input">
                      <span className="terminal-prompt">$</span>
                      <span style={{ color: 'var(--text-muted)' }}>
                        Click "Run Code" to execute the solution
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              className="btn run-button"
              onClick={() => runCode(problem.id)}
              disabled={activeTerminals[problem.id] === 'Running...'}
            >
              <i className="fas fa-play"></i>
              {activeTerminals[problem.id] === 'Running...' ? 'Running...' : 'Run Code'}
            </button>

            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <strong>Test Cases:</strong>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                {problem.testCases.map((testCase, index) => (
                  <li key={index} style={{ marginBottom: '0.25rem' }}>
                    {testCase.input} → {testCase.expected}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LeetCodeSection;