<script lang="ts" setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);
const newTodo = ref<string>('');

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({
      id: uuidv4(),
      title: newTodo.value,
      completed: false,
    });
    newTodo.value = '';
  }
};

const removeTodo = (id: string) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
};

const toggleTodo = (id: string) => {
  const todo = todos.value.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h1>Todo App</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="newTodo"
              label="New Todo"
              @keyup.enter="addTodo"
            ></v-text-field>
            <v-btn @click="addTodo" color="primary">Add Todo</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>Done</th>
                  <th>Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="todo in todos" :key="todo.id" :class="{ 'text-decoration-line-through': todo.completed }">
                  <td>
                    <v-checkbox
                      v-model="todo.completed"
                      @change="toggleTodo(todo.id)"
                      hide-details
                    ></v-checkbox>
                  </td>
                  <td @click="toggleTodo(todo.id)">
                    {{ todo.title }}
                  </td>
                  <td>
                    <v-btn icon @click.stop="removeTodo(todo.id)" color="error" variant="text" size="small">
                      <v-icon size="18">mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
