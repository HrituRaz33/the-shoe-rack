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
      <p class="card-text">A functional component can have many calls to useState or other Hooks. Each Hook is stored in a list, and there’s a variable that keeps track of the currently executed Hook.

When useState is executed, the state of the current Hook is read (or initialized during the first render), and then, the variable is changed to point to the next Hook.

That’s why it is important to always maintain the Hook calls in the same order, otherwise, a value belonging to another state variable could be returned.</p>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Question;