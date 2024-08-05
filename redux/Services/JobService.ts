export async function fetchJobs() {
    const response = await fetch("/api/Jobs");
    return await response.json();
}

export async function fetchJobDetails(params:any) {
    const JobID = params.params.data;
    const response = await fetch(`/api/Jobs/${JobID}`);
    return await response.json();
}