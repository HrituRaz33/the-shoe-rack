import React from 'react';

const Question = () => {
    return (
        <div>
               <div class="card">
                <div class="card-header">
                
                </div>
                <div class="card-body">
                 
                 <div class="card-group">
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">How React Work?</h5>
      <p class="card-text">React does not commit state changes one after the other if there are   multiple state changes. Instead react goes through its virtual DOM and create a list of those changes that need to be made to the actual Dom and then does it all in one single process.</p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Props Vs State Difference?</h5>
      <p class="card-text">
          Props: <br />
          1)Props are read-only. <br />
          2)Props are immutable. <br />
          3)Props allow you to pass data from one component to other components as an argument. <br />
          4)Props can be accessed by the child component. <br />
          5)Stateless component can have Props. <br />
          6)Stateless component can have Props. <br />
          State: <br />
          1)State changes can be asynchronous. <br />
          2)State is mutable. <br />
          3)State holds information about the components. <br />
          4)State cannot be accessed by child components. <br />
          5)Stateless components cannot have State. <br />
          6)Stateless components cannot have State. <br />
      </p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">How use state works?</h5>
      <p class="card-text">The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. </p>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Question;