using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_ejake370.Models
{
    public class GradeCalculatorModel
    {
        [Required(ErrorMessage ="Value for {0} is required.")]
        [Range(0,100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public float Assignments { get; set; }
        [Required(ErrorMessage = "Value for {0} is required.")]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public float GroupProject { get; set; }
        [Required(ErrorMessage = "Value for {0} is required.")]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public float Quizzes { get; set; }
        [Required(ErrorMessage = "Value for {0} is required.")]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public float Midterm { get; set; }
        [Required(ErrorMessage = "Value for {0} is required.")]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public float Final { get; set; }
        [Required(ErrorMessage = "Value for {0} is required.")]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public float Intex { get; set; }

    }
}
