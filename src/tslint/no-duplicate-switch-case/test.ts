declare const string: string;

// good

switch (string) {
  case 'a':
  case 'b':
}

// bad

switch (string) {
  case 'a':
  case 'a':
  case 'b':
}
