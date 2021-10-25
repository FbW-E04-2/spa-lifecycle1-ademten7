# Changes

## Change 8 

- In the SearchResults's componentDidMount, added a fetch-Request that loads the users from jsonplaceholder.com

## Change 7

- Modified Header-HTML
- Added currentPage to App's state 
- Added method navigate to the App-component
- Introduced componentHasMounted and componentWillUnmount lifecycle methods

## Change 6

- Inside SearchResults, implemented shouldComponentUpdate and checked if
if nextProps.searchFor === this.lastSearchFor
- Added a new class-variable lastSearchFor
that saves the last prop sent down to SearchResults

## Change 5

- Added onChange & onClick-events for the App-component
- Added Prop "searchFor" that is sent down
- In the SearchResults-component, piped the Array.map-method with .filter to only show the
ones that being looked for  

## Change 4

- Converted HTML-users to array of users inside SearchResult's state
- Created User-component

## Change 3

- Created Header and SearchResults (stateful) component

## Change 2

- created HTML & CSS, no JavaScript coding yet

## Change 1

- converted functional create-react-app boilerplate into class-component