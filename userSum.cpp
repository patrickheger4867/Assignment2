/*
 * userSum.cpp
 *
 *  Created on: Oct 12, 2019
 *      Author: patri
 */

#include <iostream>

// the user types in whatever numbers they want
// and when the while loop ends, those numbers
// the user typed in will be summed together.
int main()
{
	int sum = 0, val =0;
	// the condition std::cin >> val will be
	// false if the user types in an invalid
	// data type for val or if they cause an
	// end-of-file
	while(std::cin >> val)
	{
		sum += val;
	}
	std::cout << "Sum is: " << sum << std::endl;
	return 0;
}


