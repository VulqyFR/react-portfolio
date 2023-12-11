import React, { useState, useRef, useEffect } from 'react';

const Console = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);
  const endOfOutputRef = useRef(null);

  const commands = {
    'help': 'Available commands: info, regex, vim',
    'info': 'My name is Elvin Chauvel i\'m 19 and i study at Saint-Adjutor',
    'regex': 'Day 1: *Typing regex for email*, 10 years later : *Typing regex for email*',
    'mcd': 'Error 404 : brain has been destroyed',
    'vim': 'The mouse was invented in 1963 by Douglas Engelbart of the Stanford Research Institute and introduced to the public in 1968.'
  };

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleCommandExecution = (event) => {
    if (event.key === 'Enter') {
      setOutput(prevOutput => [...prevOutput, `PC eOS@user > ${command}`, commands[command] || `'${command}' is not recognized as an internal or external command, operable program or batch file.`]);
      setCommand('');
    }
  };
  const scrollToBottom = () => {
    endOfOutputRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [output]);

  return (
    <div className="console">
      <div className='console__header'>
        <div className='console__header-tab'>
          <h4 className="console__header-tab-title">&lt;&gt; eOS TerminalShell</h4>
        </div>
      </div>
      <div className="console__command-container">
        <p>
          eosTerminal [Version 10.0.22631.2715]
          <br/>
          (c) Elvin Chauvel's Corporation. All rights reserved.
        </p>
        {output.map((line, index) => <p key={index} className="console__output-line">{line}</p>)}
        <div ref={endOfOutputRef} className="console__end-of-output" />
        <div className="console__input-wrapper">
          <span className="console__input-prefix">PC eOS@user &gt;</span>
            <input type="text" value={command} onChange={handleCommandChange} onKeyDown={handleCommandExecution} className="console__input" />
        </div>
      </div>
    </div>
  );
};

export default Console;