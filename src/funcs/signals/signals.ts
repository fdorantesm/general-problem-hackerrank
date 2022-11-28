export function signalUpdateTimes(
  signalOne: number[],
  signalTwo: number[]
): number {
  let maxequal: number;
  let updates = 0;
  signalOne.forEach((signal, index) => {
    const signalsEquals = signal === signalTwo[index];
    const signalGtMax = maxequal ? signal > maxequal : true;
    if (signalsEquals && signalGtMax) {
      maxequal = signal;
      updates += 1;
    }
  });
  return updates;
}
