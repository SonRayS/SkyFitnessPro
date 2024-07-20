import { CourseType, WorkoutType } from "../types";
import { ref, get, child, set} from "firebase/database";
import { db } from "./firebase_api";


export const getCourses = async () => {
    let result: CourseType[] = [];
  
    try {
      const snapshot = await get(child(ref(db), `courses`));
  
      if (snapshot.exists()) {
        Object.keys(snapshot.val()).forEach((key) => {
          result.push(snapshot.val()[key]);
        });
  
        result = result.sort(compareByOrder);
      }
    } catch (e) {
      console.error(e);
    }
  
    return result;
  };

  export const getCourse = async (courseId: string) => {
    let result: CourseType[] = [];
  
    try {
      const snapshot = await get(child(ref(db), `courses/${courseId}`));
  
      if (snapshot.exists()) {
        result = snapshot.val();
      }
    } catch (e) {
      console.error(e);
    }
  
    return result;
  };

  export const getFavoriteCourseOfUser = async (userId: string) => {
    try {
      const snapshot = await get(child(ref(db), `users/${userId}`));
  
      if (snapshot.exists()) {
        const promises = Object.keys(snapshot.val()).map(async (key) => {
          const data = await getCourse(key);
          const dataWithProgress = {
            ...data,
            progress: snapshot.val()[key].progress,
          };
          return dataWithProgress;
        });
  
        const result = await Promise.all(promises);
        return result;
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  export const getUserWorkouts = async (userId: string, courseId: string) => {
    try {
      const workoutIdsSnapshot = await get(
        child(ref(database), `courses/${courseId}/workouts`)
      );
  
      if (workoutIdsSnapshot.exists()) {
        const workoutIds = workoutIdsSnapshot.val();
        let workouts = [];
  
        for (let id of workoutIds) {
          const workoutDataSnapshot = await get(
            child(ref(db), `workouts/${id}/name`)
          );
  
          if (workoutDataSnapshot.exists()) {
            const progressSnapshot = await get(
              child(ref(db), `users/${userId}/${courseId}/${id}/done`)
            );
  
            if (progressSnapshot.exists()) {
              workouts.push({
                name: workoutDataSnapshot.val(),
  
                id,
                progress: progressSnapshot.val(),
  
              });
            }
          }
        }
  
        return workouts; // Возвращаем готовый массив тренировок
      }
  
      return []; // Возвращаем пустой массив, если workoutIds не существует
    } catch (e) {
      console.error(e);
      return []; // Возвращаем пустой массив в случае ошибки
    }
  };
  
  export const getCourseById = async (courseId: string) => {
    let result: CourseType | null = null;
  
    try {
      const snapshot = await get(child(ref(db), `courses/${courseId}`));
  
      if (snapshot.exists()) {
        result = snapshot.val();
      }
    } catch (e) {
      console.error(e);
    }
  
    return result;
  };
  
  
  export const getWorkoutById = async (
    workoutId: string,
    userId: string,
    courseId: string
  ) => {
    console.log('getWorkoutById', workoutId, userId, courseId)
    let result: WorkoutType | null = null;
  
    try {
      const snapshot = await get(
        child(ref(db), `users/${userId}/${courseId}/${workoutId}`)
      );
  
      if (snapshot.exists()) {
        result = snapshot.val();
      }
    } catch (e) {
      console.error(e);
    }
  
    return result;
  };

export function compareByOrder(a: CourseType, b: CourseType) {
    if (a.order < b.order){
        return -1;
    }
    if (a.order > b.order){
        return 1;
    }
    return 0;
}