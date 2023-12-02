import React, { useState } from "react";
import Button from "./Button";
import { SelectButton } from "./Button";
import { TodoModal } from "./TodoModal";

export const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
    <div>
        <Button onClick={() => {setModalOpen(true)}} >Add Task</Button>
        <SelectButton>
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
        </SelectButton>
        <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
    );
    };
