import { useForm } from 'react-hook-form';

export default function LibraryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange' }); // 'onChange' enables live validation

  const onSubmit = (data) => {
    alert('Form Submitted Successfully!\n' + JSON.stringify(data));
  };

  return (
    <div className="card p-4 shadow-sm" style={{ maxWidth: '500px' }}>
      <h2>Third-Party Validation (React Hook Form)</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Minimum 3 characters required' }
            })}
          />
          {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}