import { Suspense, lazy } from 'react';

// Lazy loading components
const List = lazy(() => import('./Components/List'));
const PassingProps = lazy(() => import('./Components/PassingProps'));
const EmptyListExample = lazy(() => import('./Components/ReactConditionalRendering/EmptyListExample'));
const IfElse = lazy(() => import('./Components/ReactConditionalRendering/IfElse'));
const Logical = lazy(() => import('./Components/ReactConditionalRendering/Logical'));
const SwitchStatement = lazy(() => import('./Components/ReactConditionalRendering/SwitchStatement'));
const TernaryOperator = lazy(() => import('./Components/ReactConditionalRendering/TernaryOperator'));
const ToggleExample = lazy(() => import('./Components/ReactConditionalRendering/ToogleExample'));
const ControlledForms = lazy(() => import('./Components/ReactForms/ControlledForms'));
const ReactHookForm = lazy(() => import('./Components/ReactForms/ReactHookForm'));
const UncontrolledForms = lazy(() => import('./Components/ReactForms/UncontrolledForms'));
const ReactKey = lazy(() => import('./Components/ReactKey'));
const ClassCompCreateRef = lazy(() => import('./Components/ReactRef/ClassCompCreateRef'));
const FuncCompUseRef = lazy(() => import('./Components/ReactRef/FuncCompUseRef'));
const DynamicRendering = lazy(() => import('./Components/ReactRenderElements/DynamicRendering'));
const FragmentRendering = lazy(() => import('./Components/ReactRenderElements/FragmentRendering'));
const VirtualDOM = lazy(() => import('./Components/VirtualDOM'));

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Basics</h1>
      <p>
        This application demonstrates various React concepts including Virtual DOM, Props, Lists, Forms, Keys, Refs, and Render Elements.
        Each section contains examples to illustrate how these concepts work in practice.
      </p>
      <hr />

      <Suspense fallback={<p>Loading component...</p>}>

        <VirtualDOM />
        <PassingProps />
        <hr />

        <h2>React Lists</h2>
        <p>
          React allows you to render lists of elements using the map function.
          Each element in a list should have a unique key to help React identify which items have changed, are added, or removed.
        </p>
        <List />
        <hr />

        <h2>React Forms</h2>
        <p>
          React provides two types of forms: controlled and uncontrolled.
          Controlled forms are managed by React state, while uncontrolled forms use the DOM to manage form data.
        </p>
        <ControlledForms />
        <UncontrolledForms />
        <ReactHookForm />
        <hr />

        <h2>React Key</h2>
        <p>Keys are used to identify elements in lists and help React optimize rendering.</p>
        <ReactKey />
        <hr />

        <h2>React Refs</h2>
        <p>Refs provide a way to access DOM nodes or React elements created in the render method.</p>
        <p>Refs are useful for managing focus, text selection, or media playback.</p>
        <ClassCompCreateRef />
        <FuncCompUseRef />
        <hr />

        <h2>React Render Elements</h2>
        <p>React provides different ways to render elements, including dynamic rendering and fragment rendering.</p>
        <DynamicRendering />
        <FragmentRendering />
        <hr />

        <h2>React Conditional Rendering</h2>
        <p>Conditional rendering in React allows you to render different components or elements based on certain conditions.</p>
        <IfElse />
        <TernaryOperator />
        <Logical />
        <SwitchStatement />
        <ToggleExample />
        <EmptyListExample />

      </Suspense>

      <hr />
    </div>
  );
}

export default App;
