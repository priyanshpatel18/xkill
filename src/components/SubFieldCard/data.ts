export interface fieldType {
  id: number;
  difficulty: string;
  description: string;
  input: string;
  output: string;
  examples: { input: string; output: string }[];
  title: string;
}

export const QuestionData: fieldType[] = [
  {
    id: 1,
    difficulty: 'easy',
    title: 'Sum of Array Elements',
    description:
      'Write a function that takes an array of integers as input and returns the sum of its elements.',
    input: 'An array of integers arr (0 <= length of array <= 1000)',
    output: 'A single integer, which is the sum of the elements in the array.',
    examples: [
      {
        input: '[1, 2, 3, 4, 5]',
        output: '15',
      },
      {
        input: '[-10, 20, -30, 40]',
        output: '20',
      },
      {
        input: '[]',
        output: '0',
      },
    ],
  },
  {
    id: 2,
    difficulty: 'easy',
    title: 'Reverse String',
    description:
      'Write a function that takes a string as input and returns the string reversed.',
    input: 'A string s',
    output: 'The reversed string.',
    examples: [
      {
        input: '"hello"',
        output: '"olleh"',
      },
      {
        input: '"world"',
        output: '"dlrow"',
      },
      {
        input: '"a"',
        output: '"a"',
      },
    ],
  },
  {
    id: 3,
    difficulty: 'easy',
    title: 'Count Vowels',
    description:
      'Write a function that takes a string as input and returns the number of vowels in the string.',
    input: 'A string s',
    output: 'An integer representing the number of vowels in the string.',
    examples: [
      {
        input: '"hello"',
        output: '2',
      },
      {
        input: '"world"',
        output: '1',
      },
      {
        input: '"aeiou"',
        output: '5',
      },
    ],
  },
  {
    id: 4,
    difficulty: 'medium',
    title: 'Find Maximum Subarray',
    description:
      'Write a function that takes an array of integers and finds the contiguous subarray with the maximum sum.',
    input: 'An array of integers arr',
    output:
      'An integer representing the maximum sum of the contiguous subarray.',
    examples: [
      {
        input: '[−2,1,−3,4,−1,2,1,−5,4]',
        output: '6',
      },
      {
        input: '[1]',
        output: '1',
      },
      {
        input: '[5,4,−1,7,8]',
        output: '23',
      },
    ],
  },
  {
    id: 5,
    difficulty: 'medium',
    title: 'Valid Parentheses',
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    input:
      "A string s containing just the characters '(', ')', '{', '}', '[' and ']'",
    output:
      'A boolean value, true if the input string is valid, false otherwise.',
    examples: [
      {
        input: '"()"',
        output: 'true',
      },
      {
        input: '"()[]{}"',
        output: 'true',
      },
      {
        input: '"(]"',
        output: 'false',
      },
    ],
  },
  {
    id: 6,
    difficulty: 'medium',
    title: 'Longest Common Prefix',
    description:
      'Write a function to find the longest common prefix string amongst an array of strings.',
    input: 'An array of strings strs',
    output: 'A string representing the longest common prefix.',
    examples: [
      {
        input: '["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: '["dog","racecar","car"]',
        output: '""',
      },
      {
        input: '["interspecies","interstellar","interstate"]',
        output: '"inters"',
      },
    ],
  },
  {
    id: 7,
    difficulty: 'hard',
    title: 'Merge Intervals',
    description:
      'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
    input: 'An array of intervals where intervals[i] = [starti, endi]',
    output:
      'An array of the non-overlapping intervals that cover all the intervals in the input.',
    examples: [
      {
        input: '[[1,3],[2,6],[8,10],[15,18]]',
        output: '[[1,6],[8,10],[15,18]]',
      },
      {
        input: '[[1,4],[4,5]]',
        output: '[[1,5]]',
      },
    ],
  },
  {
    id: 8,
    difficulty: 'hard',
    title: 'Word Ladder',
    description:
      "Given two words (beginWord and endWord), and a dictionary's word list, find the length of the shortest transformation sequence from beginWord to endWord, such that only one letter can be changed at a time and each transformed word must exist in the word list.",
    input: 'A begin word, an end word, and a list of dictionary words',
    output:
      'An integer representing the length of the shortest transformation sequence.',
    examples: [
      {
        input: '"hit", "cog", ["hot","dot","dog","lot","log","cog"]',
        output: '5',
      },
      {
        input: '"hit", "cog", ["hot","dot","dog","lot","log"]',
        output: '0',
      },
    ],
  },
  {
    id: 9,
    difficulty: 'hard',
    title: 'N-Queens',
    description:
      'The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.',
    input: 'An integer n',
    output: 'An array of distinct solutions to the n-queens puzzle.',
    examples: [
      {
        input: '4',
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      },
      {
        input: '1',
        output: '[["Q"]]',
      },
    ],
  },
];
