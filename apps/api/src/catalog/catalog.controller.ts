import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CmsGuard } from "../auth/cms.guard";
import { CatalogService } from "./catalog.service";
import { CreateCourseDto, CreateFaqDto, CreateReviewDto, CreateStudentDto, CreateUniversityDto, UpdateCourseDto, UpdateFaqDto, UpdateReviewDto, UpdateStudentDto, UpdateUniversityDto } from "./catalog.dto";

@ApiTags("Catalog and Students")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@Controller()
export class CatalogController {
  constructor(private readonly service: CatalogService) {}
  @Get("students") students() { return this.service.listStudents(); }
  @Post("students") createStudent(@Body() dto: CreateStudentDto) { return this.service.createStudent(dto); }
  @Patch("students/:id") updateStudent(@Param("id") id: string, @Body() dto: UpdateStudentDto) { return this.service.updateStudent(id, dto); }
  @Delete("students/:id") deleteStudent(@Param("id") id: string) { return this.service.deleteStudent(id); }
  @Get("universities") universities() { return this.service.listUniversities(); }
  @Post("universities") createUniversity(@Body() dto: CreateUniversityDto) { return this.service.createUniversity(dto); }
  @Patch("universities/:id") updateUniversity(@Param("id") id: string, @Body() dto: UpdateUniversityDto) { return this.service.updateUniversity(id, dto); }
  @Delete("universities/:id") deleteUniversity(@Param("id") id: string) { return this.service.deleteUniversity(id); }
  @Get("courses") courses() { return this.service.listCourses(); }
  @Post("courses") createCourse(@Body() dto: CreateCourseDto) { return this.service.createCourse(dto); }
  @Patch("courses/:id") updateCourse(@Param("id") id: string, @Body() dto: UpdateCourseDto) { return this.service.updateCourse(id, dto); }
  @Delete("courses/:id") deleteCourse(@Param("id") id: string) { return this.service.deleteCourse(id); }
  @Get("faqs") faqs() { return this.service.listFaqs(); }
  @Post("faqs") createFaq(@Body() dto: CreateFaqDto) { return this.service.createFaq(dto); }
  @Patch("faqs/:id") updateFaq(@Param("id") id: string, @Body() dto: UpdateFaqDto) { return this.service.updateFaq(id, dto); }
  @Delete("faqs/:id") deleteFaq(@Param("id") id: string) { return this.service.deleteFaq(id); }
  @Get("reviews") reviews() { return this.service.listReviews(); }
  @Post("reviews") createReview(@Body() dto: CreateReviewDto) { return this.service.createReview(dto); }
  @Patch("reviews/:id") updateReview(@Param("id") id: string, @Body() dto: UpdateReviewDto) { return this.service.updateReview(id, dto); }
  @Delete("reviews/:id") deleteReview(@Param("id") id: string) { return this.service.deleteReview(id); }
}
