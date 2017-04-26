function forEach(iterable, callback) {
  for (const keyOrIndex in iterable) {
    callback(iterable[keyOrIndex], keyOrIndex, iterable);
  }
}
