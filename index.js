const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
    { input: [0, 0], output: [0]},
    { input: [0, 1], output: [1]},
    { input: [1, 0], output: [1]},
    { input: [1, 1], output: [0]}
]

net.train(trainingData);

for (let i = 0; i < 1000000; i++) {
    const value = Math.round(net.run([1, 0]));
    if (value !== 1) {
        console.log('error! i = ' + i)
    }
}
console.log('job is done')