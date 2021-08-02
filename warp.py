import os 
import argparse

def warp_to_storage(name, password):
    return 1

def store_file():
    print('\n\nEnter the name of the file that you want to store: ', end='')
    name = input()

    print('\nSearching for the file in your current directory ....')
    
    if not os.path.exists(name):
        print(f'Sorry, we can\'t find \"{name}\" in your current directory')
    else:

        print('We want to make sure that the file stays in the right hands. How about you help us out by giving us a password? \nEnter a password: ', end='')
        password = input()

        warp = warp_to_storage(name, password)
        print('Your file ({name}) has been sucessfully warped to our storage!')

        print('Please remember the name of the file, the warp code (listed below) and the password you created for the file!')
        print('Summary: \n')
        print('Name of the file: ', name)
        print(f'Warp Code: {warp}')
        print(f'Password: Just kidding, it\'s safe in our hands! But it better also be safe in your hands for it to be useful!!!')

    print('\n\n')
    

parser = argparse.ArgumentParser()
parser.add_argument('-store', help = "Store a file into the warp.", action = "store_true")
parser.add_argument('-retrieve', help = 'Retrieve a file from the warp.', action = "store_true")
args = parser.parse_args()


if args.store and args.retrieve:
    print('Sorry, you can either store or retrieve a file!')

elif args.store:
    store_file()
elif args.retrieve:
    get_file()

else:
    print("You want me to do something? Use the -store or -retrieve flags to tell me what you want me to do!")


