Intuition:
To find the longest substring without repeating characters, we need to avoid duplicates while scanning the string.

A brute-force approach would check all substrings, but that is inefficient. Instead, we can use a sliding window that expands when characters are unique and shrinks when a duplicate appears.

Approach:
Use two pointers:
i → start of the window
j → end of the window
Use a dictionary (map) to store the last seen index of each character.
Iterate through the string:
If the current character is already in the map and inside the window, move i to last_index + 1
Update the character's latest index in the map
Compute the current window length: j - i + 1
Update the maximum length

Complexity:
Time complexity: O(n)
Space complexity: O(k)
Where k is the number of unique characters in the string.
