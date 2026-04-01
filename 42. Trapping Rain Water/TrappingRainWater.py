class Solution(object):
    def trap(self, arr):
        n = len(arr)
        maxL = [0] * n
        maxR = [0] * n
        maxL[0] = arr[0]
        maxR[n - 1] = arr[n - 1]

        for i in range(1, n):
            maxL[i] = max(maxL[i - 1], arr[i])
            maxR[n - i - 1] = max(maxR[n - i], arr[n - i])

        # maxR = [0] * n
        # maxR[n - 1] = arr[n - 1]
        # for i in range(n - 2, -1, -1):
        #     maxR[i] = max(maxR[i + 1], arr[i])

        ans = 0
        for i in range(n):
            ans += max(min(maxL[i], maxR[i]) - arr[i], 0)

            # water_trapped = min(maxL[i], maxR[i]) - arr[i]
            # ans += 0 if water_trapped < 0 else water_trapped
        return ans
