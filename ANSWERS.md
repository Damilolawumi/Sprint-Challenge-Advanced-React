- [ ] Why would you use class component over function components (removing hooks from the question)?
<answer>
class-based components have lifecycle methods which fire at specific points of a component lifecycle. Those lifecycle methods can be used to fetch the data from remote servers, create objects, such as timers when the component is mounted (rendered to the DOM for the first time), and free them when a component is unmounted from the DOM, determine if the component should be re-rendered if props are changed, and so on.

-Class-based components can also have refs to the underlying DOM nodes. Refs may be necessary, for instance, to manage focus in your application for accessibility reasons.

- [ ] Name three lifecycle methods and their purposes.
<answer>
1)Mounting- The componentDidMount() happens as soon as your component is mounted. (Birth of your component)
2)Updating- The componentDidUpdate()happens as soon as the updating happens.(Growth of your component)
3)Unmounting- The componentWillUnmount() happens just before the component unmounts and is destroyed.(Death of your component)

- [ ] What is the purpose of a custom hook?
<answer>
-They let you use state and other React features without writing a class.

- [ ] Why is it important to test our apps?
<answer>
it is important to test our apps because it minimizes the risk of bugs finding their way into production code.