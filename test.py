import time

nemo = ['nemo']
everyone = [
    'dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank',
]
large = ['nemo'] * 100


def find_nemo(array):
    t0 = time.time()
    for i in array:
        if array[0] == 'nemo':
            print('Found Nemo')
    t1 = time.time()
    print(f"Call to find Nemo took {t1 - t0} milliseconds")


find_nemo(large)
