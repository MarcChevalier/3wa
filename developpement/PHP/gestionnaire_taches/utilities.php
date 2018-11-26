<?php

function saveTask(array $taskData) {

	$file = fopen('tasks.csv', 'a');

    fputcsv($file, $taskData);

    fclose($file);

}


function loadTasks()
{

	$file = fopen('tasks.csv', 'a+');

    $tasks = array(); // []

    while(true) {

    	$taskData = fgetcsv($file);

    	if($taskData == false)
		{
        	break;

        }
    	array_push($tasks, $taskData);

    }

	fclose($file);

    return $tasks;
}

function saveTasks(array $tasks)
{
	$file = fopen('tasks.csv', 'w');

    foreach($tasks as $taskData)
	{

		fputcsv($file, $taskData);
	}

    fclose($file);
}

function removeTasks(array $allTasks, array $indexes)
{
	$tasks = array();

    foreach($allTasks as $index => $taskData)
    {
    	if(in_array($index, $indexes) == false)
        {

        	array_push($tasks, $taskData);
        }


    }

	return $tasks;
}






?>
