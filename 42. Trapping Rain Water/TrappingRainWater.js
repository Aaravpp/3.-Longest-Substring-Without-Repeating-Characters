var trap = function(arr) {
    let n = arr.length;
    let maxL = []
    let maxR = []
    maxL[0] = arr[0];
    maxR[n - 1] = arr[n - 1]

    for(let i = 1; i < n; i++){
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
        maxR[n - i - 1] = Math.max(maxR[n - i], arr[n - i])
    }

    // let maxR = []
    // maxR[n - 1] = arr[n - 1]
    // for(let i = n - 2; i >= 0; i--){
    //     maxR[i] = Math.max(maxR[i + 1], arr[i]);
    // }

    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += Math.max((Math.min(maxL[i], maxR[i]) - arr[i]), 0);

        // let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
        // ans += waterTrapped < 0 ? 0 : waterTrapped;
    }
    return ans;
};